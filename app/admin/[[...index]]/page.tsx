"use client";

import {NextStudio} from 'next-sanity/studio';
import config from "../../../../next-sanity/sanity.config";

export default function Adminpage(){
    return <NextStudio config={config} />;
}

