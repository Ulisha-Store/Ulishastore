import React from 'react';

interface SocialLoginProps {
  onGoogleLogin: () => void;
  onFacebookLogin: () => void;
  onAppleLogin: () => void;
}

export function SocialLogin({ onGoogleLogin, onFacebookLogin, onAppleLogin }: SocialLoginProps) {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <button
          onClick={onGoogleLogin}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Google</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
          </svg>
        </button>

        <button
          onClick={onFacebookLogin}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Facebook</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          onClick={onAppleLogin}
          className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with Apple</span>
          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12.146 0c.66 0 1.4.178 2.216.534a6.63 6.63 0 0 1 2.047 1.447c.56.56 1.023 1.227 1.388 2.002.365.775.547 1.604.547 2.49 0 .86-.179 1.68-.536 2.462a6.914 6.914 0 0 1-1.398 2.022 6.768 6.768 0 0 1-2.058 1.375c-.816.334-1.558.5-2.228.5-.468 0-.95-.068-1.446-.203a5.69 5.69 0 0 1-1.32-.559v7.703c0 .611-.215 1.125-.645 1.542-.43.417-.964.625-1.602.625-.637 0-1.173-.208-1.605-.625-.433-.417-.649-.93-.649-1.542V4.334c0-.637.216-1.173.649-1.607.432-.434.968-.652 1.605-.652.65 0 1.194.218 1.63.652.437.434.655.97.655 1.607v.369c.364-.293.788-.54 1.272-.738a4.8 4.8 0 0 1 1.778-.298zm.024 1.875c-.572 0-1.13.133-1.673.4-.543.267-1.022.637-1.437 1.112-.414.475-.744 1.036-.988 1.683-.244.647-.366 1.344-.366 2.092 0 .76.122 1.46.366 2.099.244.64.574 1.2.988 1.683.415.483.894.857 1.437 1.124.544.267 1.1.4 1.673.4.56 0 1.112-.133 1.655-.4a4.53 4.53 0 0 0 1.442-1.124c.41-.483.736-1.044.976-1.683.24-.64.36-1.34.36-2.099 0-.748-.12-1.445-.36-2.092-.24-.647-.565-1.208-.976-1.683a4.482 4.482 0 0 0-1.442-1.112c-.543-.267-1.095-.4-1.655-.4z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}