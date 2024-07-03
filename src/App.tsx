import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
// asd
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string
  searchText: string

}

const App = () => {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid 
        templateAreas={{
          base:`'nav' 'main'`,
          lg:`'nav nav' 'aside main'`, //992 pixel breakpoint (happens at 991 width pixel)
        }}
      >
        
        <GridItem area="nav">
          <NavBar onSearch={searchText => setGameQuery({...gameQuery, searchText})}/>
        </GridItem>

        <Show above='lg'>        
          <GridItem area="aside" padding={2}>
            <GenreList onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})} selectedGenre={gameQuery.genre}/>
          </GridItem>
        </Show>
        
        <GridItem area="main">
          <Box padding={5}>
            
          {/* <Center>
            <GameHeading gameQuery={gameQuery}/>
          </Center> */}
            <GameHeading gameQuery={gameQuery}/>

          <HStack spacing={5} marginY={5}>
            <PlatformSelector onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})} 
                              selectedPlatform={gameQuery.platform} 
            />
            <SortSelector onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          </HStack>

          <GameGrid gameQuery={gameQuery}/>
          </Box>

        </GridItem>

      </Grid>    
    </>
  )
}

export default App