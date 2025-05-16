import './SizeSelector.scss';

function SizeSelector({ skus, selected, onSelect }) {
    return (
        <div className="sku-selector">
            {skus.map((sku) => (
                <button
                    key={sku.code}
                    className={sku.code === selected?.code ? 'sku active' : 'sku'}
                    onClick={() => onSelect(sku)}
                >
                    {sku.name}
                </button>
            ))}
        </div>
    );
}

export default SizeSelector;
