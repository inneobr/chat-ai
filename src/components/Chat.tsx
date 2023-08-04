'use client'

import { useChat } from 'ai/react'
import { Input } from "./ui/input";
import 'primeicons/primeicons.css';
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
                <ScrollArea className="flex flex-col flex-grow h-0 p-4 bg-slate-300">
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
                                                   <span className="text-sm text-gray-500 leading-none font-bold capitalize">Franciny Both</span>              
                                                    <div className="text-gray-900 p-3 rounded-r-lg rounded-bl-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                                        <p className="text-sm text-justify">{ message.content }</p>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        
                                    )}

                                    { message.role == 'user' && (                                     
                                        <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">                                              
                                            <div> 
                                                <span className="text-sm text-gray-500 leading-none font-bold">Você</span>
                                                <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                                                    <p className="text-sm text-justify">{ message.content }</p>
                                                </div>
                                               
                                            </div>

                                            <Avatar className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300">
                                                <AvatarFallback>FB</AvatarFallback>
                                                <AvatarImage className="border-custom" src="/user_image.png"/>
                                            </Avatar>
                                        </div>
                                    )}
                                </div>  
                            )
                        })
                    }
                </ScrollArea>

                <form className="w-full flex gap-2 items-center bg-gray-700 card-footer p-4 " onSubmit={ handleSubmit }> 
                    <i className="pi pi-comments font-normal text-3xl text-slate-500"></i> 
                    <Input className="flex items-center h-10 w-full rounded px-3 bg-slate-700 text-slate-50  border-gray-600" value= { input }  onKeyDown={e => e.key === 'Enter' ? handleInputChange: ''} onChange= { handleInputChange } placeholder="Diga olá."/>
                </form>
            </div>
        </section>
    )
}