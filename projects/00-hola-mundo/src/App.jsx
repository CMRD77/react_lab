import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'nesravi',
        name: 'Carlos Ravines',
        isFollowing:false
    },
    {
        userName: 'data1',
        name: 'Test data1',
        isFollowing:false
    },
    {
        userName: 'data2',
        name: 'Test data2',
        isFollowing:false
    },
    {
        userName: 'data3',
        name: 'Test data3',
        isFollowing:false
    }
]

export function App() {


    return (
        <section className='App'>
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            name={name}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                        </TwitterFollowCard>
                        
                    )
                })

            }
        </section>
    )
}
