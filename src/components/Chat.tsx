'use client'

import { useChat } from 'ai/react'
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Chat(){
    const { messages, input, handleInputChange, handleSubmit } =  useChat ()   
    return(
        <section className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-slate-50 p-2">
            <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                <header className="pt-6 pb-4 px-5 border-b bg-gray-700">
                    <div className="flex justify-between items-center mb-3">
                    
                        <div className="flex items-center">
                            <a className="inline-flex items-start mr-3" href="#0">
                                <img className="rounded-full" src="/assistent_fran.png" width="48" height="48" alt="profile" />
                            </a>
                            <div className="pr-1">
                                <a className="inline-flex text-slate-50 hover:text-slate-50" href="https://www.instagram.com/franciny.both/" target="_blank">
                                    <h2 className="text-xl leading-snug font-bold">Franciny Both</h2>
                                </a>
                                <a className="block text-sm font-medium hover:text-slate-300" href="https://www.instagram.com/franciny.both/" target="_blank">@franciny.both</a>
                            </div>
                        </div>
                    </div>
                </header>
                <ScrollArea className="flex flex-col flex-grow h-0 p-4 bg-slate-600">
                    {   
                        messages.map(message => {
                            return (                                                  
                                <div key={ message.id }>                                
                                    { message.role == 'assistant' && (                                     
                                            <div className="flex w-full mt-2 space-x-3 max-w-xs ">                                               
                                                <Avatar className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                                    <AvatarFallback>FB</AvatarFallback>
                                                    <AvatarImage className="border-custom" src="/assistent_fran.png"/>
                                                </Avatar>

                                                <div>
                                                    <div className="bg-gray-300 text-gray-900 p-3 rounded-r-lg rounded-bl-lg">
                                                        <p className="text-sm">{ message.content }</p>
                                                    </div>
                                                    <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                                </div>
                                            </div>
                                        
                                    )}

                                    { message.role == 'user' && (                                     
                                        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">                                              
                                            <div>
                                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                                    <p className="text-sm">{ message.content }</p>
                                                </div>
                                                <span className="text-xs text-gray-500 leading-none">2 min ago</span>
                                            </div>

                                            <Avatar className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                                <AvatarFallback>FB</AvatarFallback>
                                                <AvatarImage src="/user_image.png"/>
                                            </Avatar>
                                        </div>
                                        
                                    )}
                                </div>  
                            )
                        })
                    }
                </ScrollArea>

                 <form className="bg-gray-700 p-4 w-full flex gap-2 card-footer" onSubmit={ handleSubmit }>
                    <Input className="flex items-center h-10 w-full rounded px-3 bg-slate-700 text-slate-50" value= { input } onChange= { handleInputChange } placeholder="Diga olá."/>
                    <Button type="submit">Send</Button>
                </form>
            </div>	
            
               
           
        </section>
    )
}