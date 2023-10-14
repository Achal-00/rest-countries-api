export default function Card(props) {
  return (
    props.data[0] && (
      <div className="grid gap-12 landscape:grid-cols-2 landscape:lg:gap-24">
        <div>
          <img src={props.data[0].flags.svg} alt="" className="w-full" />
        </div>
        <div className="grid gap-8 landscape:lg:grid-cols-2 landscape:self-center">
          <h1 className="text-light-mode-text dark:text-white font-extrabold text-xl landscape:lg:col-span-2">
            {props.data[0].name.common}
          </h1>
          <div className="grid gap-2 text-sm text-light-mode-text dark:text-white landscape:self-start">
            <p>
              <span className="font-semibold">Native Name:</span>&nbsp;
              {props.data[0].name.nativeName
                ? props.data[0].name.nativeName[
                    Object.keys(props.data[0].name.nativeName)[0]
                  ].common
                : "undefined"}
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
              {props.data[0].subregion ? props.data[0].subregion : "undefined"}
            </p>
            <p>
              <span className="font-semibold">Capital:</span>&nbsp;
              {props.data[0].capital ? props.data[0].capital[0] : "undefined"}
            </p>
          </div>
          <div className="grid gap-2 text-sm text-light-mode-text dark:text-white landscape:self-start">
            <p>
              <span className="font-semibold">Top Level Domain:</span>&nbsp;
              {props.data[0].tld[0]}
            </p>
            <p>
              <span className="font-semibold">Currencies:</span>&nbsp;
              {props.data[0].currencies
                ? props.data[0].currencies[
                    Object.keys(props.data[0].currencies)[0]
                  ].name
                : "undefined"}
            </p>
            <p>
              <span className="font-semibold">Languages:</span>&nbsp;
              {props.data[0].languages
                ? Object.values(props.data[0].languages).join(", ")
                : "undefined"}
            </p>
          </div>
          <div className="text-light-mode-text dark:text-white grid gap-4 landscape:lg:flex landscape:lg:col-span-2">
            <p className="font-semibold">Border Countries:</p>
            {props.data[0].borders ? (
              <div className="grid grid-cols-3 gap-2 text-center text-xs landscape:lg:grid-cols-4">
                {Object.values(props.data[0].borders).map((item, index) => (
                  <span className="bg-white dark:bg-dark-mode-elements shadow-md py-2 landscape:lg:px-8">
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
