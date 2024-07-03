import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useState } from "react";
import { BiSolidChevronDown } from "react-icons/bi"

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
}

const SortSelector = ({onSelectSortOrder}:Props) => {
    
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date Added'},
        {value: 'name', label: 'Name'},
        {value: 'released', label: 'Released Date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: '-rating', label: 'Average Rating'}

    ]
    
    const [selectedSort, setSelectedSort] = useState('');
    
    const handleSelectSort = (value: string, label: string) => {
        setSelectedSort(label);
        onSelectSortOrder(value); 
    };

    return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BiSolidChevronDown/>}>Sort by {selectedSort || "Relevance"}</MenuButton>
            <MenuList>
                {sortOrders.map(order => 
                    <MenuItem 
                        key={order.value} 
                        value={order.value} 
                        onClick={() => handleSelectSort(order.value, order.label)}
                    >
                        {order.label}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    </>
  )
}

export default SortSelector