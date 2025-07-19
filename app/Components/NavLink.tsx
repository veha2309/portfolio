import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
    href : string | "#"
    children : React.ReactNode
    className ?: string
    Path ?: string

};


const NavLink  : React.FC<NavLinkProps>  = ({
    href,
    children,
    className,
    Path
})=> {
    return ( 
        <Link href={href} className={`${className} 
            ${Path===href ? 'scale-125' : 'text-red-400 hover:scale-[130%]'} 
            transition-all 
            duration-300
        `}>
            {children}
        </Link>
    )
}
export default NavLink;