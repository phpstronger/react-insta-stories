import React, { useState } from 'react';
import SeeMore from "../../components/SeeMore";

const withSeeMore = ({ story, action, customCollapsed, children }) => {
    const [showMore, setShowMore] = useState(false);
    const toggleMore = (show) => {
        action(show ? 'pause' : 'play');
        setShowMore(show);
    }
    const CollapsedComponent = SeeMore;
    return <>
        {children}
        {story.seeMore && (
            <div
                style={{
                    position: "absolute",
                    margin: "auto",
                    bottom: showMore ? 'unset' : 0,
                    zIndex: 9999,
                    width: "100%",
                    height: showMore ? '100%' : 'auto'
                }}
            >
                <CollapsedComponent
                    action={action}
                    toggleMore={toggleMore}
                    showContent={showMore}
                    seeMoreContent={story.seeMore}
                    customCollapsed={customCollapsed || story.seeMoreCollapsed}
                />
            </div>
        )}
    </>
}

export default withSeeMore;