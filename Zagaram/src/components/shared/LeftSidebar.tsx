import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations"
import { useEffect } from "react";
import { useUserContext } from "@/context/AuthContext";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";

const LeftSidebar = () => {
  const {pathname}= useLocation();
    const navigate =useNavigate();
    const { mutate: signOut, isSuccess } = useSignOutAccount();
    const {user}= useUserContext()

    useEffect(() => {
        if (isSuccess) navigate(0);
    }, [isSuccess])
    
  return (
    <nav className="leftsidebar">
      <div className="flex flex-col gap-11 -mt-3">
          <Link to={'/'} className="flex gap-3 items-center">
            <img src="/assets/images/untitled.svg" alt="logo" width={150} height={36} />
        </Link>
        
        <Link to={`/profile/${user.id}`} className="flex gap-3 items-center">
          <img src={user.imageUrl || '/assets/images/profile-placeholder.svg'} alt="profile" className="h-11 w-11 rounded-full" />
          <div className="flex flex-col">
            <p className="body-bold">{user.name}</p>
            <p className="small-regular text-light-3">@{user.username}</p>
          </div>
        </Link>

        <ul className="flex flex-col gap-4">
          {sidebarLinks.map((link: INavLink) => {
            const isActive =pathname===link.route;
            return (
              <li key={link.label} className={`leftsidebar-link group ${isActive&& 'bg-primary-500'}`}>
                <NavLink to={link.route} className='flex gap-6 items-center p-4'>
                  <img src={link.imgURL} alt={link.label} className={`group-hover:invert-white ${isActive&& 'invert-white'}`} />
                  {link.label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
      <Button variant='ghost' className="shad-button_ghost" onClick={()=>signOut()}>
        <img src="/assets/icons/logout.svg" alt="logout" />
        <p className="small-medium lg:base-medium">Logout</p>
      </Button>
    </nav>
  )
}

export default LeftSidebar