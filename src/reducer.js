export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,




    //token: 'BQDFtzIJ7vE8mH1ZHxEYJdFPt09s-g81IxyyAG11frkVQlPe0kUYvAlGm5o33B0cJ0j8pCP-MUiohEk7vJ9Sftf0rvoiRUR2UfdrmDEIKziANVWRO34XWUw8OnlEmbu45MFgIp87qGx7PcqYmmQJJ2mur0UYlIKuNggROBb6GXHYt1dYwrRGTdu5nl3PZh8LttUwtATNSwVCq1i6a93q3A',
}

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case 'SET USER':
            return {
                ...state,
                user: action.user,
            };
            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token,
                };
                case 'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists: action.playlists,
                    };
                    case 'SET_DISCOVER_WEEKLY':
                        return {
                            ...state,
                            discover_weekly: action.discover_weekly,
                        }
                        case 'SET_TOP_ARTISTS':
                            return {
                                ...state,
                                top_artists: action.top_artists,
                            };
                            case 'SET_ITEM':
                                return {
                                    ...state,
                                    item: action.item,
                                };
                                case 'SET_PLAYING':
                                    return {
                                        ...state,
                                        playing: action.playing,
                                    };
                                    case 'SET_SPOTIFY':
                                        return {
                                            ...state,
                                            spotify: action.spotify,
                                        };
            default:
                return state;
    }
}

export default reducer;