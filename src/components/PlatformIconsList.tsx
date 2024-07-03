import { HStack, Icon } from "@chakra-ui/react";
import { FaPlaystation, FaXbox, FaWindows, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../hooks/usePlatforms";


interface Props {
    platforms: Platform[]
}

const PlatformIconsList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        iphone: MdPhoneIphone,
        web: BsGlobe
    };

    return (
        <HStack marginY={1}>
            {platforms.map((platform, index) => (
                <Icon
                    key={index} // Use index as key if platforms do not have unique IDs
                    as={iconMap[platform.slug]}
                    color={'gray.500'}
                />
            ))}
        </HStack>
    );
};

export default PlatformIconsList;
