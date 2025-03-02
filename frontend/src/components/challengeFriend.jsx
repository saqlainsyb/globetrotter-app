import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useMutation, useQuery } from '@tanstack/react-query';
import { registerUser, getChallengeInvite } from '@/api';

function ChallengeFriend({ correctCount, incorrectCount  }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(null);

  // ✅ Fetch Challenge Invite Query (depends on `userId`)
  
  const { data: inviteData, refetch } = useQuery({
        queryKey: ['challengeInvite', userId],
        queryFn: () => getChallengeInvite(userId),
        enabled: userId !== null
    });


  // ✅ Register User Mutation
  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      setUserId(data._id);
      refetch();
    },
    onError: (error) => {
      console.error('User registration failed:', error.message);
    },
  });

  
  const inviteLink = inviteData?.inviteLink;
  const inviteImage = inviteData?.dynamicImageUrl;

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
    setUsername("");  // Reset username when dialog opens
    setUserId("");    // Reset userId as well
  };

  const handleChallengeStart = () => {
    if (!username.trim()) {
      alert("Please enter a username to proceed.");
      return;
    }

    registerMutation.mutate({
        username,
        score: correctCount,
        correctAnswers: correctCount,
        incorrectAnswers: incorrectCount,
      });
  };

  const handleWhatsAppShare = () => {
    const message = `🌍 ${username} scored ${correctCount} in Globetrotter! Can you beat them?\n\nPlay here: ${inviteLink}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="absolute top-6 right-6">
      <Button onClick={handleOpenDialog} className="bg-green-600 hover:bg-green-500 text-white">
        Challenge a Friend 🌍
      </Button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen} >
        <DialogContent className="bg-neutral-900 border border-neutral-700 shadow-lg z-9999">
          <DialogHeader>
            <DialogTitle className="text-white">Challenge a Friend!</DialogTitle>
            <DialogDescription className="text-neutral-400">
              Enter your username and share your challenge link with friends.
            </DialogDescription>
          </DialogHeader>

          {/* Username Input (only shown if user isn't registered yet) */}
          {!userId && (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 rounded-md bg-neutral-800 text-white border border-neutral-700"
              />
              <Button
                onClick={handleChallengeStart}
                className="w-full bg-green-600 hover:bg-green-500 text-white"
                disabled={registerMutation.isPending}
              >
                {registerMutation.isPending ? 'Registering...' : 'Create Challenge'}
              </Button>
            </div>
          )}

          {/* After registration - Show link & share options */}
          {userId && (
            <div className="space-y-4">
              <p className="text-amber-400 font-medium">{username} scored {correctCount} points! 🏅</p>

              {inviteImage && (
                <img src={inviteImage} alt="Challenge Preview" className="w-full rounded-lg" />
              )}

              <div className="p-3 bg-neutral-800 rounded-lg text-neutral-300 text-sm">
                {inviteLink ? (
                  <a href={inviteLink} target="_blank" rel="noopener noreferrer" className="break-all underline">
                    {inviteLink}
                  </a>
                ) : (
                  <p className="text-neutral-500">Generating link...</p>
                )}
              </div>

              <Button
                onClick={handleWhatsAppShare}
                className="w-full bg-green-500 hover:bg-green-600 text-white transition-transform duration-150 active:scale-95"
                disabled={!inviteLink}
              >
                📲 Share via WhatsApp
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ChallengeFriend;
