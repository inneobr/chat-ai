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
                            return ( <span>teste</span>
                            
                            )
                        }
                    )}

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