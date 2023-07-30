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
            <CardHeader className="header">
                <div className="flex items-end">                
                    <Avatar className="img-logo">
                        <AvatarFallback>FB</AvatarFallback>
                        <AvatarImage src="/Franciny.png"/>
                    </Avatar>
                    <div  className="">
                        <span className="user-name">Franciny Both</span>
                        <p className="user-status">online</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4"> 
                <ScrollArea className="wrapper">                                 
                    { messages.map(message => {
                        return (              
                            <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                
                                <div key={ message.id } className="w-full chat-message">                                                                       
                                        { message.role == 'user' && (                                        
                                            <div className="flex items-end justify-end">
                                                <div  className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                    <div>
                                                        <span className="px-4 py-2 rounded-lg inline-block rounded-br-noneh-14 bg-gradient-to-r from-cyan-500 to-blue-500 justify-content">{ message.content }</span>
                                                    </div>
                                                </div>
                                                <Avatar className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                    <AvatarFallback>FB</AvatarFallback>
                                                    <AvatarImage src="/Guest.png"/>
                                                </Avatar>
                                            </div>
                                        )}

                                        { message.role == 'assistant' && (
                                            <div className="flex items-end">
                                                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gradient-to-r from-purple-500 to-pink-500 to-blue-500 text-whit-600 justify-content">{ message.content }</span></div>
                                                </div>
                                                <Avatar className="flex items-end">
                                                    <AvatarFallback>US</AvatarFallback>
                                                    <AvatarImage src="/Franciny.png"/>
                                                </Avatar>
                                            </div>
                                        )}   
                                                                    
                                </div>                               
                            </div> 
                        )}) 
                    }
                </ScrollArea> 
            </CardContent>
            <CardFooter>
                <form className="w-full flex gap-2 card-footer" onSubmit={ handleSubmit }>
                    <Input value= { input } onChange= { handleInputChange } placeholder="Buscar"/>
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>  
        </Card>
    )

}