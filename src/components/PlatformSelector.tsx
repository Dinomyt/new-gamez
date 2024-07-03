import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronCompactDown } from "react-icons/bs"
import usePlatforms,{ Platform }  from "../hooks/usePlatforms"


interface Props {
    onSelectedPlatform: (platform: Platform) => void;
    selectedPlatform:  Platform | null;
}

const PlatformSelector = ({onSelectedPlatform, selectedPlatform}: Props) => {
  
    const {data, error} = usePlatforms();

    if(error) return
    return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronCompactDown></BsChevronCompactDown>}>
                {selectedPlatform?.name || 'Platforms'}
                </MenuButton>
            <MenuList>
                {data.map(x => 
                    <MenuItem key={x.id}
                            onClick={() => onSelectedPlatform(x)}
                    >{x.name}</MenuItem>
                )}
            </MenuList>
        </Menu>
    </>
  )
}

export default PlatformSelector