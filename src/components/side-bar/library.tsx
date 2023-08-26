import { ActivatedLibraryIcon } from "../icons/activated-library-icon";
import { CreateIcon } from "../icons/create-icon";
import { GridViewIcon } from "../icons/grid-view-icon";
import { ReduceIcon } from "../icons/reduce-icon";

export function Library() {
    return (
        <div className="flex flex-col w-full h-0 min-h-full rounded-lg bg-[#121213]">
            <div className="flex-none">
                <header className="py-2 px-4">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center grow shrink-0 py-1 px-2 gap-3 h-10">
                            <svg height="24" width="24" className="fill-white">
                                <ActivatedLibraryIcon />
                            </svg>
                            <span className="font-bold text-base">Your Library</span>
                        </div>
                        <div className="p-2">
                            <svg height="16" width="16" className="fill-white">
                                <CreateIcon />
                            </svg>
                        </div>
                        <div className="p-2">
                            <svg height="16" width="16" className="fill-white">
                                <GridViewIcon />
                            </svg>
                        </div>
                        <div className="p-2">
                            <svg height="16" width="16" className="fill-white">
                                <ReduceIcon />
                            </svg>
                        </div>
                    </div>
                </header>
            </div>
            <div className="scrollable grow divide-y">
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