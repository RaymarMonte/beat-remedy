import { ActivatedLibraryIcon } from "@/components/svg-paths/activated-library-icon";
import { CreateIcon } from "@/components/svg-paths/create-icon";
import { EnlargeIcon } from "@/components/svg-paths/enlarge-icon";
import { GridViewIcon } from "@/components/svg-paths/grid-view-icon";
import { ListViewIcon } from "@/components/svg-paths/list-view-icon";
import { ReduceIcon } from "@/components/svg-paths/reduce-icon";
import { SmallIcon } from "@/components/utilities/small-icon";
import { useState } from "react";

export function Library() {
    const [isListView, setIsListView] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

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
                        <SmallIcon icon={<CreateIcon />} />
                        {
                            isExpanded && (
                                isListView ? (
                                    <SmallIcon icon={<ListViewIcon />} />
                                ) : (
                                    <SmallIcon icon={<GridViewIcon />} />
                                )
                            )
                        }
                        {
                            isExpanded ? (
                                <SmallIcon icon={<ReduceIcon />} />
                            ) : (
                                <SmallIcon icon={<EnlargeIcon />} />
                            )
                        }
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