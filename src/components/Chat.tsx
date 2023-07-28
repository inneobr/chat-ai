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
        <Card className="chat-container">
            <CardHeader>
                <CardTitle className="chat-title">INNEO.ORG</CardTitle>
                <CardDescription className="chat-description">Assistente virtual</CardDescription>
                <hr/>
            </CardHeader>

            <CardContent className="space-y-4">
                <ScrollArea className="h-[650px] w-full pr-5">  
                    { messages.map(message => {
                        return (
                            <div key={ message.id } className="gap-3 test-slate-600 text-sm">
                                { message.role == 'user' && (
                                    <Avatar className="logo">
                                        <AvatarFallback>DF</AvatarFallback>
                                        <AvatarImage src="/human.png"/>
                                    </Avatar>
                                )}

                                { message.role == 'assistant' && (
                                    <Avatar className="logo right">
                                        <AvatarFallback>DF</AvatarFallback>
                                        <AvatarImage src="/robot.png"/>
                                    </Avatar>
                                )}
                                
                                <div className="chat-message">
                                    <span className="chat-name">{ message.role == 'user' ? 'Usuário' : 'Assistente'}</span>                                    
                                    <p className="chat-content">{ message.content }</p>
                                </div>
                                
                            </div>
                        )}) 
                    }
                </ScrollArea>
            </CardContent>

            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={ handleSubmit }>
                    <Input value= { input } onChange= { handleInputChange } placeholder="Buscar"/>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>           
        </Card>       
    )

}