import { useState } from 'react'

interface ItemsProps {
    id: number
    name: string
}

export default function Items() {

    const [items, setItems] = useState<ItemsProps[]>([
        { id: 1, name: 'Sample A' },
        { id: 2, name: 'Sample B' },
    ]);
    const additionalItems = [
        { id: 3, name: 'Sample C' },
        { id: 4, name: 'Sample D' },
    ]

    const loadMore = () =>{
        setItems(prevItems=> [...prevItems,...additionalItems])
    }

    return (
        <>
            <ul>
                {items.map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </ul>
            <button onClick={loadMore}>LoadMore</button>
        </>
    )
}
