import { WaitASec } from "./WaitStrings"

const WaitItem = (() => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-full  opacity-0 animate-disappear">
            <img src='https://scontent.faep14-2.fna.fbcdn.net/v/t31.18172-8/10428201_768787766516549_3764084873927736108_o.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeGdJKvNcLZ0LEncrO_dy_BY-DtfS__llm74O19L_-WWbvTamyIYjYEQxz-PZhNV6qM&_nc_ohc=0O5Th8lfscAAX-GvMl_&_nc_ht=scontent.faep14-2.fna&oh=00_AT-KMhY-IUlSgXucN8VoAtXPbh-rIDDK7VowLOZ9iRcosA&oe=62509F05' alt='' className="absolute h-full w-full top-0 object-cover" />
            <p className="absolute top-[2em] text-5xl text-white text-shadow-fort font-guy m-6 z-10">{WaitASec}</p>
        </div>
    )
})

export default WaitItem