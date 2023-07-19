export function Library() {
    return (
        <div className="flex flex-col w-full h-0 min-h-full rounded-lg bg-[#121213]">
            <div className="flex-none">
                <div className="h-32">
                    Your Library
                </div>
            </div>
            // TODO: scrollbar-gutter
            <div className="grow overflow-y-hidden hover:overflow-y-scroll gutter-stable divide-y">
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
                <div className="w-full h-32 flex"></div>
            </div>
        </div>
    )
}