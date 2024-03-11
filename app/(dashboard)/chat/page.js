import Chat from '@/app/components/Chat'
import React from 'react'
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";

const chatPage = () => {
  const queryClient = new QueryClient()
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <Chat/>
    </HydrationBoundary>
  )
}

export default chatPage