import Link from "next/link"

export default function NavItem({label,path,datatest}){
    return (
        <Link dataTest={datatest} href={path}>
            {label}
        </Link>
    )
}