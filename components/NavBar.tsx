import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const NavBar = () => {
    const router = useRouter();
    const pages = ['home', 'applications', 'jobs', 'my-jobs', 'my-tokens'];

    return (
        <>
            <Tabs 
                variant='soft-rounded' 
                colorScheme='green'
                // set defaultIndex to tab with id of current route
                defaultIndex={pages.indexOf(router.pathname.split('/')[1])-1}
            >
                <TabList>
                    <Tab>
                        <Link href='/applications'>Applications</Link>
                    </Tab>
                    <Tab>
                        <Link href='/jobs'>Jobs</Link>
                    </Tab>
                    <Tab>
                        <Link href='/my-jobs'>My Jobs</Link>
                    </Tab>
                    <Tab>
                        <Link href='my-tokens'>My Tokens</Link>
                    </Tab>
                </TabList>
                <TabPanels>
                </TabPanels>
            </Tabs>
        </>
    )
}

export default NavBar;