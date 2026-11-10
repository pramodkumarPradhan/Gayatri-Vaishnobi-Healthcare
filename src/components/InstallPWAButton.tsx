import { useEffect, useState } from 'react';
import { Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function InstallPWAButton({ className = "" }: { className?: string }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if app is already running in standalone/installed mode
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true);
      return;
    }

    const handleBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        setDeferredPrompt(null);
      }
    } else {
      alert(
        "To install Gayatri Vaishnobi Health Care:\n\n" +
        "• Desktop (Chrome / Edge): Click the install icon (⊕ or computer icon) in the right side of the address bar, or click Menu (⋮) > 'Install Gayatri Vaishnobi Health Care...'.\n\n" +
        "• Mobile (Android / Chrome): Tap Menu (⋮) > 'Install app' or 'Add to Home screen'.\n\n" +
        "• iPhone / iPad (Safari): Tap the Share button (square with arrow) > 'Add to Home Screen'."
      );
    }
  };

  if (isInstalled) return null;

  return (
    <button
      onClick={handleInstallClick}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all active:scale-95 cursor-pointer border border-emerald-500 ${className}`}
      title="Install Gayatri Vaishnobi Healthcare App"
    >
      <Download className="w-3.5 h-3.5 text-emerald-200" />
      <span>Install App</span>
    </button>
  );
}
