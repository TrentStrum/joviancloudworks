"use client"

import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostEditor } from '@/components/admin/post-editor';
import { FeatureEditor } from '@/components/admin/feature-editor';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('posts');
  const supabase = createClientComponentClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={handleSignOut}>
          Sign Out
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="features">Feature Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="posts">
          <PostEditor />
        </TabsContent>
        <TabsContent value="features">
          <FeatureEditor />
        </TabsContent>
      </Tabs>
    </div>
  );
}