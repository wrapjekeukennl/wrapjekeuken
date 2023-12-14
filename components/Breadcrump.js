import React from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const Breadcrump = () => {
    const router = useRouter();

    const word = [];

    for (let i = 0; i < router.asPath.length; i++) {
        if (router.asPath[i] === '-') {
            word.push(' ')
        } else {
            word.push(`${router.asPath[i]}`)
        }
    }

    console.log(word)
    return (
        <div className="border-b">
            <div className="xl:container mx-auto py-2">
                <h5 className="text-sm lg:ml-12 ml-6"><Link href="/"><span
                    className="hover:text-three">Home</span></Link> | <Link href={router.asPath}><span
                    className="text-three capitalize cursor-pointer">{word.slice(1)}</span></Link></h5>
            </div>
        </div>
    );
};

export default Breadcrump;
