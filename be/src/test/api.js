export const initialData = {
    boards: [
        {
            id: '',
            columnOrder: ['', ''],
            columns: [
                {
                    id: '',
                    boardId: '',
                    title: '',
                    cardOrder: ['', '', '', '', '', '', 'card-7'
                    ],
                    cards: [
                        {
                            id: '', boardId: 'board-1', columnId: 'column-1', title: 'Title of card 1', cover: 'https: //i.pinimg.com/564x/32/d0/a6/32d0a693aa28f4d7f2f48c48dcf0b79c.jpg'
                        },
                        {
                            id: '', boardId: 'board-2', columnId: 'column-2', title: 'Title of card 2', cover: null
                        }
                    ]
                },
                {
                    id: 'column-2',
                    boardId: 'board-1',
                    title: 'Inprogress column',
                    cardOrder: ['card-8', 'card-9', '0'
                    ],
                    cards: [
                        {
                            id: 'card-8', boardId: 'board-8', columnId: 'column-8', title: 'Title of card 8', cover: null
                        },
                        {
                            id: 'card-9', boardId: 'board-9', columnId: 'column-9', title: 'Title of card 9', cover: null
                        },
                        {
                            id: '0', boardId: 'board-10', columnId: 'column-10', title: 'Title of card 10', cover: null
                        },
                    ]
                },
                {
                    id: 'column-3',
                    boardId: 'board-1',
                    title: 'Done column',
                    cardOrder: ['1', '2', '3'
                    ],
                    cards: [
                        {
                            id: '1', boardId: 'board-11', columnId: 'column-11', title: 'Title of card 11', cover: null
                        },
                        {
                            id: '2', boardId: 'board-12', columnId: 'column-12', title: 'Title of card 12', cover: null
                        },
                        {
                            id: '3', boardId: 'board-13', columnId: 'column-13', title: 'Title of card 13', cover: null
                        },
                    ]
                }
            ]
        }
    ]
}