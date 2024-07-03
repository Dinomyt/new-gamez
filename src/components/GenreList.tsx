import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../Service/getCroppedImageUrl ";

interface Props {
    onSelectedGenre: (genre:Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({onSelectedGenre, selectedGenre}:Props) => {
    
    const {data,isLoading} = useData<Genre>("/genres")
  
    return (
    <>
        <List>
            {isLoading && <Spinner/>}
            {data.map((x) =>
                <ListItem key= {x.id}>
                <HStack>
                    <Image objectFit={'cover'} boxSize={16} src={getCroppedImageUrl(x.image_background)} borderRadius={4}/>
                    <Button color={x.id === selectedGenre?.id ? 'blue.500' : 'normal'} fontSize={'lg'} variant={'link'} onClick={() => onSelectedGenre(x)}>{x.name}</Button>
                </HStack>
                </ListItem>
            )}
        </List>

    </>
  )
}

export default GenreList