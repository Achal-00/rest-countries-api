export default function Card(props) {
  return (
    props.data[0] && (
      <div className="grid gap-12">
        <div>
          <img src={props.data[0].flags.png} alt="" className="w-full" />
        </div>
        <div className="grid gap-8">
          <h1 className="text-light-mode-text dark:text-white font-extrabold text-xl">
            {props.data[0].name.common}
          </h1>
          <div className="grid gap-2 text-sm text-light-mode-text dark:text-white">
            <p>
              <span className="font-semibold">Native Name:</span>&nbsp;
              {
                props.data[0].name.nativeName[
                  Object.keys(props.data[0].name.nativeName)[0]
                ].common
              }
            </p>
            <p>
              <span className="font-semibold">Population:</span>&nbsp;
              {props.data[0].population}
            </p>
            <p>
              <span className="font-semibold">Region:</span>&nbsp;
              {props.data[0].region}
            </p>
            <p>
              <span className="font-semibold">Sub Region:</span>&nbsp;
              {props.data[0].subregion}
            </p>
            <p>
              <span className="font-semibold">Capital:</span>&nbsp;
              {props.data[0].capital[0]}
            </p>
          </div>
          <div className="grid gap-2 text-sm text-light-mode-text dark:text-white">
            <p>
              <span className="font-semibold">Top Level Domain:</span>&nbsp;
              {props.data[0].tld[0]}
            </p>
            <p>
              <span className="font-semibold">Currencies:</span>&nbsp;
              {
                props.data[0].currencies[
                  Object.keys(props.data[0].currencies)[0]
                ].name
              }
            </p>
            <p>
              <span className="font-semibold">Languages:</span>&nbsp;
              {Object.values(props.data[0].languages).join(", ")}
            </p>
          </div>
          <div className="text-light-mode-text dark:text-white grid gap-4">
            <p className="font-semibold">Border Countries:</p>
            {props.data[0].borders ? (
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                {Object.values(props.data[0].borders).map((item, index) => (
                  <span className="bg-white dark:bg-dark-mode-elements shadow-md py-2">
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm">None</p>
            )}
          </div>
        </div>
      </div>
    )
  );
}
