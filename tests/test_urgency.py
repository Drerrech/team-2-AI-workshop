from app.urgency import urgency_label


def test_urgency_labels():
    assert urgency_label(-1) == "Overdue"
    assert urgency_label(0) == "Due today"
    assert urgency_label(1) == "Due in 1 day"
    assert urgency_label(7) == "Due in 7 days"
    assert urgency_label(8) == ""
