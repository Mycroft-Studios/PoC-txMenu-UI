"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainList from "@/app/pages/MainList";
import {PlayerList} from "@/app/pages/PlayerList";
import {IframeTesting} from "@/app/pages/IframeTesting";
import Image from "next/image";
import * as React from "react";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const data = [
    {
        players: 1,
        name: '9:00',
    },
    {
        name: '10:00',
        players: 3,
    },
    {
        name: '11:00',
        players: 5,
    },
    {
        name: '12:00',
        players: 2,
    },
    {
        name: '13:00',
        players: 6,
    },
    {
        name: '14:00',
        players: 4,
    },
    {
        name: '15:00',
        players: 1,
    },
];


export default function Home() {
    const [HideIframe, setHideIframe] = React.useState(true)
    const [HidePlayerList, setHidePlayerList] = React.useState(true)
    
      return (
          <>
              <div className="flex flex-row gap-3">
                  <Card className="w-[300px] bg-background" style={{marginTop: "15px", marginLeft: "10px"}}>
                      <CardHeader>
                          <CardTitle>
                              <Image
                                  src="/txadmin.png"
                                  width={170}
                                  height={100}
                                  style={{marginLeft: "40px"}}
                                  alt="Picture of the author"
                              />
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <Tabs defaultValue="main" className="w-[400px]">
                              <TabsList className="grid w-64 grid-cols-3 bg-secondary">
                                  <TabsTrigger value="main"  onClick={function() {
                                      setHideIframe(true)
                                      setHidePlayerList(true)
                                      return
                                  }}>
                                      Main
                                  </TabsTrigger>
                                  <TabsTrigger value="players" onClick={function() {
                                      setHideIframe(true)
                                      setHidePlayerList(false)
                                      return
                                  }}>
                                      Players
                                  </TabsTrigger>
                                  <TabsTrigger value="tx" onClick={function() {
                                      setHidePlayerList(true)
                                      setHideIframe(false)
                                      return
                                  }}>
                                      txAdmin
                                  </TabsTrigger>
                              </TabsList>
                              <TabsContent value="main">
                                    <MainList />
                              </TabsContent>
                              <TabsContent value="players"></TabsContent>
                              <TabsContent value="tx">
                              </TabsContent>
                          </Tabs>
                      </CardContent>
                  </Card>
                  <Card className="w-[300px] bg-background" style={{marginTop: "15px", marginLeft: "66%", height: "150px"}} hidden={HidePlayerList && HideIframe}>
                      <CardContent>
                          <CardTitle style={{marginTop: "5px", marginBottom: "5px"}}>Recent Joins</CardTitle>
                          <LineChart width={270} height={115} data={data}>
                              <XAxis dataKey="name" hide={true}/>
                              <Tooltip  wrapperStyle={{backgroundColor: "#191a1c", borderColor: "#3f4146"}}
                                        contentStyle={{backgroundColor: "#191a1c", borderColor: "#3f4146"}}
                                        itemStyle={{backgroundColor: "#191a1c", borderColor: "#3f4146"}} />
                              <Line type="monotone" dataKey="players" stroke="#f00a53" strokeWidth={2} />
                          </LineChart>
                      </CardContent>
                  </Card>
              </div>
              <PlayerList Hide={HidePlayerList} />
              <IframeTesting Hide={HideIframe} />
          </>
  )
}
