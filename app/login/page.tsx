'use client';

import React, { useState } from 'react';

import LinkedIn from './modals/linkedin-modal';
import { Auth } from '@/features/auth';
import { Button } from '@/shared/ui';
import { getKeycloakLoginUrl } from '@/lib/keycloak';

export default function LoginPage() {
  const [visible, setVisible] = useState(false);

  const handleKeycloakLogin = () => {
    const redirectUri = `${window.location.origin}/api/auth/callback`;
    const loginUrl = getKeycloakLoginUrl(redirectUri);
    window.location.href = loginUrl;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
      <div className="w-full lg:w-1/2 lg:mr-10 mt-12 lg:mt-0">
        <p className="text-2xl font-bold text-blue-500">
          Share your experience – make the world better!
        </p>
        <div className="text-lg text-gray-500 mt-4 space-y-4 [p]:indent-6 text-justify">
          <p>
            Welcome to the platform where every review becomes a contribution to
            creating an honest and transparent community! Here you can share in
            detail about your experience interacting with companies, share both
            positive and negative impressions.
          </p>
          <p>
            We give you the opportunity not just to leave a review, but to
            evaluate the service, tell about the smallest details of service and
            product quality. Your stories help other users make informed
            choices, and companies – to improve the quality of their services
            and work on mistakes.
          </p>
          <p>
            Imagine that every rating and review is a vote for quality and
            honesty. By combining opinions, we create a space where transparency
            becomes the key to trust, and every user has the opportunity to
            influence the market.
          </p>
          <p>
            Join us, share your experience, rate companies and help others find
            reliable partners. Together we make the world of business more open
            and fair!
          </p>
        </div>

        {/* <NewModal visible={visible} setVisible={setVisible}>
          <div>Test</div>
        </NewModal> */}
        <Auth type="login" visible={visible} setVisible={setVisible} />

        <div className="flex flex-col gap-4 mt-6">
          <Button
            className="btn bg-blue-500 text-white self-start hover:bg-blue-600"
            onClick={() => {
              setVisible(true);
            }}
          >
            Sign In
          </Button>

          <Button
            className="btn bg-orange-500 text-white self-start hover:bg-orange-600"
            onClick={handleKeycloakLogin}
          >
            Sign in with Keycloak
          </Button>
        </div>

        {/* <button className="btn bg-blue-500 text-white mt-6 self-start hover:bg-blue-600">
          <label htmlFor="linkedin_modal">Sign in with LinkedIn</label>
        </button> */}
      </div>

      <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
        <img
          src="/imgs/comp.avif"
          width={100}
          height={100}
          alt="logo"
          className="w-96 h-auto object-cover"
        />
      </div>

      <LinkedIn />
    </div>
  );
}
