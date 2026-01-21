import React from 'react'
import {Container,Logo,LogoutBtn} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header(){
          const authStatus =useSelector((state) => state.auth.status)
          const navigate =useNavigate()

          const navItems=[
                    {
                              name:'Home',
                              slug:'/',
                              active:true
                    },
                    {
                              name: "Login",
                              slug: "/login",
                              active: !authStatus,
                    },
                    {
                              name: "Signup",
                              slug: "/signup",
                              active: !authStatus,
                    },
                    {
                              name: "My Posts",
                              slug: "/all-posts",
                              active: authStatus,
                    },
                    {
                              name: "Add Post",
                              slug: "/add-post",
                              active: authStatus,
                    },
                    ]

          return (
                    <header>
                              <Container>
                                        <nav className='flex flex-row justify-center p-2 items-center bg-gray-500'>
                                                  <div>
                                                       <Link to='/'>
                                                           <Logo width='70px' />
                                                       </Link>
                                                  </div>
                                                  <ul className='flex ml-auto'>
                                                            {navItems.map((item) => 
                                                                      item.active ? (//jo element repeat hota h uspe hm key lgaate hain, slug me url hai aur navigate ki jgh hm Link bhi use kr skte the
                                                                                <li key={item.name}>
                                                                                    <button
                                                                                          className='inline-block px-6 py-2 duration-200 hover:bg-blue-200 rounded-full font-semibold'
                                                                                          onClick={() => navigate(item.slug)}>{item.name}</button>
                                                                                </li>
                                                                      ) : null
                                                            )}
                                                            {authStatus && (// agr authStatus true hoga tbhi && ke baad ki cheez chlega

                                                                      <li>
                                                                         <LogoutBtn />
                                                                      </li>
                                                            )}
                                                  </ul>
                                        </nav>
                              </Container>
                    </header>
          )
}

export default Header