import StatusCard from "./StatusCard";
import ProfileCard from "./ProfileCard";
import PostTags from "./PostTags";
import RecentEntries from "./RecentEntries"


export default function Sidebar() {
    return (
        <aside className="w-full md:w-72 flex-shrink-0 space-y-6">
            <ProfileCard />
            <StatusCard />

            {/* Tags */}
            <PostTags tags={["tag1", "tag2", "tag3", "tag4"]} />

            {/* Recent Entries */}
            <RecentEntries
                entries={[
                    { title: "The Quiet Rain", link: "#" },
                    { title: "Pages of Dawn", link: "#" },
                    { title: "Between Cups of Coffee", link: "#" }
                ]}
            />
        </aside>
    );
}
