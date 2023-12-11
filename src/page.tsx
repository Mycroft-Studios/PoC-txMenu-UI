"use client"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainList from "@/src/pages/MainList";
import {PlayerList} from "@/src/pages/PlayerList";
import {IframeTesting} from "@/src/pages/IframeTesting";
import Image from "next/image";
import * as React from "react";
import {VisibilityProvider} from "@/src/providers/visibilityProvider";
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import {AnnoucementDialog} from "@/src/pages/AnnoucementDialog";
import {MainListItem} from "@/src/pages/MainListItem";

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

const menuItems = ["Main", "Players", "txAdmin"]
export default function Home() {
    const [HideIframe, setHideIframe] = React.useState(true)
    const [HidePlayerList, setHidePlayerList] = React.useState(true)
    const [selectedMenu, setSelectedMenu] = React.useState(0)

    function HandleMenuChange(index: number) {
        setSelectedMenu(index)

        switch (index) {
            case 1:
                setHideIframe(true)
                setHidePlayerList(false)
                break;
            case 2:
                setHidePlayerList(true)
                setHideIframe(false)
                break;
            default:
                setHideIframe(true)
                setHidePlayerList(true)
                break;
        }
    }

      return (
          <VisibilityProvider>
              <div className="flex flex-row gap-3">
                  <Card className="w-[300px] bg-background" style={{marginTop: "15px", marginLeft: "10px"}}>
                      <CardHeader style={{padding: "1rem"}}>
                          <CardTitle>
                              <Image
                                  src="/txadmin.png"
                                  width={190}
                                  height={100}
                                  style={{marginLeft: "40px"}}
                                  alt="Picture of the author"
                              />
                          </CardTitle>
                      </CardHeader>
                      <CardContent style={{paddingLeft: "15px", paddingBottom: "15px"}}>
                              <div className="flex flex-col" style={{justifyContent: "left", alignContent: "left"}}>
                                  <div className="space-x-4 flex flex-row">
                                          {menuItems.map((menu, index) => (
                                           <div key={menu}>
                                               <Button key={index} variant={selectedMenu == index ? "secondary" : "ghost"}
                                                       className="w-full justify-start"
                                                       onClick={() => HandleMenuChange(index)}>
                                                   <p style={{fontSize: "15px"}}>{menu}</p>
                                               </Button>
                                           </div>
                                          ))}
                                  </div>
                                  {selectedMenu == 0 ? <><MainList/> </> : <> </>}
                            </div>
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
          </VisibilityProvider>
  )
}
