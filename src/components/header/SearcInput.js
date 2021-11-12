import React,{useEffect, useRef, useState} from 'react'
import ContentLoader from 'react-content-loader';
import { useDispatch } from 'react-redux';
import { changeLoading, getWeather } from '../../features/weather/weatherSlice';

const SearcInput = () => {

    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [result, setResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const searchRef = useRef()

    const isTyping = search.replace(/\s+/, '').length > 0;
    const AutocompleteLoader = () => (
        <ContentLoader
            speed={2}
            width={500}
            height={60}
            viewBox="0 0 500 60"
            backgroundColor="#f3f3f3"
            foregroundColor="#dedede"
        >
            <rect x="203" y="22" rx="0" ry="0" width="4" height="3" />
            <rect x="15" y="10" rx="0" ry="0" width="71" height="40" />
            <rect x="96" y="20" rx="0" ry="0" width="169" height="8" />
            <rect x="96" y="35" rx="0" ry="0" width="92" height="6" />
        </ContentLoader>
    )

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleClickOutside = (e) => {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
            setSearch('')
        }
    }

    useEffect(() => {
        if (isTyping) {
            setLoading(true)
            const data = ['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
                'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
                'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
                'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir',
                'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya',
                'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
                'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
                'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
                'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce']

            const filteredResult = data.filter(item => item.toLowerCase().includes(search.toLowerCase()))
            setResult(filteredResult.length > 0 ? filteredResult : false);
            setLoading(false)
            return () => {
                setLoading(false)
            }
        } else {
            setResult(false)
        }

    }, [search])
    return (
        <div className="search" ref={searchRef}>
            <input  type="text" value={search} className={isTyping ? 'typing' : null} placeholder="Bir yer ara.." onChange={(e) => setSearch(e.target.value)} />
            {isTyping && (
                <div className="search-result">
                    {result && loading === false && result.map((item, i) => (
                        <div className="search-result-item" key={i}>

                            <div className="title" onClick={() => {
                                dispatch(getWeather(item))
                                dispatch(changeLoading())
                                setSearch("");
                            }}>{item}</div>
                        </div>
                    ))}
                    {loading && new Array(3).fill().map(() => <AutocompleteLoader />)}
                    {!result && loading === false && (
                        <div className="result-not-found">
                            "{search}" ile ilgili yer bulamadık!
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default SearcInput
