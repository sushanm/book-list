const Image = ({ url }: { url: string }) => {
    return (<>
        <img className="py-3" src={url} alt={url} />
    </>)
}

export default Image