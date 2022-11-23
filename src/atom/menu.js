// impor jotai 
import { atom } from 'jotai'
import { useAtom } from 'jotai'

export const menuAtom = atom([
    // { id: 1, text: 'Home', link: '/', active: false, icon: <svg className="custom-icon1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
    { id: 2, text: 'Box Animation', link: '/', active: false, icon: <svg className="custom-icon1 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> },
])

//activate menu 
export const activateMenu = (pathname, menu, setMenu) => {
    let newMenu = menu.map(item => {
        if (item.link === pathname) {
            item.active = true
        } else {
            item.active = false
        }
        return item
    })
    setMenu(newMenu)
}
