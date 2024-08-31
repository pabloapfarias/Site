type Props={
    name:string;
    idade:string;
}

export const Pessoa =({name, idade}: Props)=>{

    return(
        <div className="p-3">
            <h1>{name}</h1>
            <h2>{idade}</h2>
        </div>

    );
}