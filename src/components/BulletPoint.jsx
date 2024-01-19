export function BulletPoint({children}) {
    return (
      <div className="flex items-start gap-x-2 mt-2">
        <div className="w-2 h-2 rounded-full bg-black shrink-0 relative top-2"></div>
        <p>{children}</p>
      </div>
    );
}