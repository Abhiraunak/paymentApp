"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textinput";
import { Center } from "@repo/ui/center";
import { useState } from "react";
import P2PTransfer from "../app/lib/actions/P2PTrasfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="h-[60vh]">
        <Center>
            <Card title="Send">
                <div className="min-w-72 pt-2">
                    <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                        setNumber(value);
                    }} />
                    <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                        setAmount(value);
                    }} />

                    <div className="pt-4 flex justify-center">
                        <Button onClick={async() => {
                            await P2PTransfer(number, Number(amount) * 100);
                        }}
                        >Send</Button>
                    </div>
                </div>
            </Card>
        </Center>
    </div>

}