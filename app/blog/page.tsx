'use client'
import { title } from "@/components/primitives";
import leftImage from "public/V10-1.jpg";
import rightImage from "public/V10-2.jpg";
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";

export default function BlogPage() {
	return (
		<div className="flex flex-col ">
            <h1 className="text-4xl font-bold text-gray-600 mb-8">VILLIERS 2 LITRE V10</h1>
            
                <div className=" text-gray-400 text-lg leading-relaxed mb-8">
                    This is an engine originally designed by Connaught (a sister company in the BDI Group) for use in the Type D Syracuse car. It has since had a major update and further development work by Villiers, led by the original Connaught chief engineer Tim Bishop. Tim is also MD of Villiers and as such is involved in all the companies engineering projects.
                    <br /><br />
                    The V10 is unique in many ways not least being its extremely narrow 22.5 degree V layout. Indeed it uses just one cylinder head to cover both banks of cylinders. It was designed at the outset as a hybrid  engine being mated to an electric high torque motor which gets the vehicle up to speed when the v10 would kick in and take over. It was also developed to run a supercharger for a high performance application.
                    <br /><br />
                    It is also unique in that it uses a ball and roller crank for minimal friction.
                    <br /><br />
                    Its block, heads and intake manifolds are all cast in aluminium and it runs with a wet sump.
                    <br /><br />
                    Its design and firing order have been developed to ensure that the engine runs super smooth. In fact in testing when running there is virtually no vibration evident.
                </div>
                <Table hideHeader aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>NAME</TableColumn>
                    <TableColumn>ROLE</TableColumn>
                    
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                    <TableCell>Tony Reichert</TableCell>
                    <TableCell>CEO</TableCell>
                    
                    </TableRow>
                    <TableRow key="2">
                    <TableCell>Zoey Lang</TableCell>
                    <TableCell>Technical Lead</TableCell>
                    
                    </TableRow>
                    <TableRow key="3">
                    <TableCell>Jane Fisher</TableCell>
                    <TableCell>Senior Developer</TableCell>
                    
                    </TableRow>
                    <TableRow key="4">
                    <TableCell>William Howard</TableCell>
                    <TableCell>Community Manager</TableCell>
                    
                    </TableRow>
                </TableBody>
                </Table>
        </div>
	);
}
