"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { AuthDialog } from './auth-dialog';

export function AuthButton() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowDialog(true)}
        className="hover:bg-secondary transition-colors"
      >
        <LogIn className="h-4 w-4 mr-2" />
        Sign In
      </Button>
      <AuthDialog open={showDialog} onOpenChange={setShowDialog} />
    </>
  );
}