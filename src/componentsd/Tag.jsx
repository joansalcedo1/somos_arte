const Tag = ({ color, text  }) => {
    return (
        <div className={`bg-${color} rounded-full px-4 py-2 text-sm font-medium cursor-pointer hover:bg-${color}-300 transition-colors`}>
            {text}
        </div>
    );
}
export default Tag;