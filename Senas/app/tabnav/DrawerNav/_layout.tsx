import {Drawer} from 'expo-router/drawer'
import CustomDrawer from '@comp/CustomDrawer'

export default function layout(){
    return(
        <Drawer drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name='Home' options={{
                headerShown: false
            }}/>
        </Drawer>
    )
}