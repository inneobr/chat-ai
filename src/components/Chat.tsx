'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat(){
    const { messages, input, handleInputChange, handleSubmit } =  useChat ()   
    return(
        <Card className="flex-1  justify-between flex flex-col">
            
        </Card>
    )

}