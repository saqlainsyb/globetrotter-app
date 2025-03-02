import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { getInviteInfo } from '@/api';

function InvitationPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const userId = searchParams.get('userId');

  const { data: inviter, isLoading, isError } = useQuery({
    queryKey: ['inviteInfo', userId],
    queryFn: () => getInviteInfo(userId),
    enabled: !!userId,  // only fetch if userId exists
  });

  const handleStartPlaying = () => {
    navigate('/play-globetrotter');
  };

  if (isLoading) {
    return <p className="text-white">Loading invite info...</p>;
  }

  if (isError || !inviter) {
    return <p className="text-red-400">Failed to load invitation. Please check the link.</p>;
  }

  // Pre-compute image URL (you can replace this with a real hosted image service if needed)
  const dynamicImageUrl = `https://dummyimage.com/600x400/000/fff.png&text=${encodeURIComponent(`${inviter.username}+scored+${inviter.score}+points!`)}`;
  
  const pageUrl = window.location.href;  // The actual invite link

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-neutral-900 text-white">

      {/* Dynamic Open Graph Meta Tags */}
      <Helmet>
        <title>{inviter.username} challenged you to Globetrotter!</title>
        <meta property="og:title" content={`Can you beat ${inviter.username}'s score?`} />
        <meta property="og:description" content={`${inviter.username} scored ${inviter.score} points in Globetrotter!`} />
        <meta property="og:image" content={dynamicImageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Can you beat ${inviter.username}'s score?`} />
        <meta name="twitter:description" content={`${inviter.username} scored ${inviter.score} points in Globetrotter!`} />
        <meta name="twitter:image" content={dynamicImageUrl} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">You were invited by {inviter.username}!</h1>
      <p className="text-xl">
        They scored <span className="text-amber-400 font-bold">{inviter.score}</span> points. Can you beat them?
      </p>
      <button
        className="mt-6 px-6 py-3 bg-green-600 active:bg-green-700 text-white rounded-lg transition-transform duration-150 active:scale-95"
        onClick={handleStartPlaying}
      >
        Start Playing
      </button>
    </div>
  );
}

export default InvitationPage;
