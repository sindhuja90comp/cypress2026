import NavItem from "./NavItem"

const navItems = [
    {
    label: 'Why Cypress?',
    path: '/',
    datatest: 'nav-why-cypress'
    },
    {
    label: 'Overview',
    path: '/overview',
    datatest: 'nav-overview'
    },
    {
    label: 'Fundamentals',
    path: '/fundamentals',
    datatest: 'nav-fundamentals'
    },
    {
        label: 'Forms',
        path: '/forms',
        datatest: 'nav-forms'
    },
    {
        label: 'Examples',
        path: '/examples',
        datatest: 'nav-examples'
    },
    {
        label: 'Component',
        path: '/component' ,
        datatest: 'nav-component'
    },
    {
        label: 'Best Practices',
        path: '/best-practices',
        datatest: 'nav-best-practices'
    },
]

export default function NavBar(){
    return (
        <ul className="nav-bar">
            {
                navItems.map((item)=> (
                    <NavItem key={item.label} label={item.label} path={item.path} datatest={item.datatest} />
                ))
            }
        </ul>
    )
}