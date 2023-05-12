import Link from "next/link";

function HeaderTitle(){
    return(
        <h1 className="text-3xl bg-slate-800 text-slate-100 rounded-3xl p-2 border-solid border-slate-950 border-2"><Link href="/">PLAY AGAINST GPT</Link></h1>
    )
}

export default HeaderTitle;