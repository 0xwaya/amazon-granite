export default function LogoMark({ className = 'h-12 w-12' }) {
  return (
    <div className={`${className} flex items-center justify-center overflow-hidden`}>
      <svg viewBox="0 0 64 64" role="img" aria-label="Urban Stone Collective brand icon" className="h-full w-full">
        <defs>
          <linearGradient id="uscGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DDCDA5" />
            <stop offset="60%" stopColor="#B8B8B4" />
            <stop offset="100%" stopColor="#8B7B57" />
          </linearGradient>
          <linearGradient id="uscGoldShadow" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#C8B78E" />
            <stop offset="100%" stopColor="#776746" />
          </linearGradient>
        </defs>
        <rect x="6" y="6" width="52" height="52" rx="12" fill="rgba(8, 12, 24, 0.6)" />
        <path d="M18 42l14 9 14-9-14 4-14-4z" fill="url(#uscGoldShadow)" />
        <path d="M18 37l14 8.2L46 37l-14 3.8L18 37z" fill="url(#uscGold)" />
        <path d="M20.5 33.8L32 40.8l11.5-7-11.5 3.2-11.5-3.2z" fill="url(#uscGold)" opacity="0.95" />
        <path d="M22.2 46.2l9.8 6.1 9.8-6.1-9.8 3.1-9.8-3.1z" fill="url(#uscGoldShadow)" opacity="0.95" />
        <path d="M24 44.6l8 4.9 8-4.9" fill="none" stroke="url(#uscGold)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 35V26l8-6v21" fill="none" stroke="url(#uscGold)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 41V16l8-6v25" fill="none" stroke="url(#uscGold)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 35V25l4-3v16" fill="none" stroke="url(#uscGold)" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
